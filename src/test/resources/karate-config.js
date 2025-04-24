function fn() {
    var env = karate.env || 'dev'; // 获取命令行参数或默认dev环境
    karate.log('karate.env system property was:', env);

    var config = {
        env: env,
        baseUrl: 'https://reqres.in',
        apiVersion: 'v1',
        timeout: 5000
    };

    // 环境特定配置
    if (env == 'dev') {
        config.baseUrl = 'https://reqres.in';
    } else if (env == 'qa') {
        config.baseUrl = 'https://reqres.in';
        config.timeout = 10000;
    } else if (env == 'prod') {
        config.baseUrl = 'https://reqres.in';
    }

    // 动态加载其他配置文件
    karate.configure('connectTimeout', config.timeout);
    karate.configure('readTimeout', config.timeout);

    return config;
}