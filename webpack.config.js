/**
 * Created by Naver on 2017. 5. 26..
 */
module.exports = {
    entry: './app/index.js',
        output: {
        path: './dist',
            filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {
                presets: ['es2015']
            }
            }
        ]
}
}
