export default {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['width', 'height'],
            replace: true,
        },
    },
};
