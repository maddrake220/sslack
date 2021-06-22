import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackCofiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface Configuration extends WebpackCofiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name: 'sslack',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'hidden-source-map' : 'inline-source-map', //
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // 바벨이 처리할 확장자 목록
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'), // ../../ 없애는 설정 tsconfig와 webpack모두 설정 해줘야 한다.
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client', // 메인 파일 경로
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] }, // chrome의 최신 2개의 버전에서 구동되게 자동으로
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript', // 위 3개 설정을 통해 ie를 포함한 모든 browser에서 구동이 되게끔 webpack이 처리
          ],
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'], // css 를 loader를 통해 js파일로 바꿔줌
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // typescript할 떄 추가해야하는 plugin
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }), // node_env를 사용할 수 있게 만들어준다
    // process.env node.env는 node 런타임(==backend)에서 사용 가능하지만 front-end에서도 사용 가능 하게 설정
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', // name에 []는 entry 결과물인데 entry에 여러 결과물을 만들 수 있다 ex) app.js app2.js app3.js ==> 결과물이 app.js app2.js app3.js 가 된다.
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, // react router할때 필요한 설정
    port: 3090,
    publicPath: '/dist/',
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
}

export default config;

// package.json: scripts "build": "cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack",
// cross-env : linux뿐 아니라 window에서도 명령이 실행 되게끔