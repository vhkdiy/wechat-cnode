const HOST_URI = 'https://cnodejs.org/api/v1';
const GET_TOPICS = '/topics';
const GET_TOPIC_BY_ID = '/topic/';

let obj2uri = (obj = {}) => {
    obj.page = obj.page || 1;
    return Object.keys(obj).map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join('&');
};

module.exports = {
    //获取首页列表数据
    getTopics(obj) {
        return HOST_URI + GET_TOPICS + '?' + obj2uri(obj);
    },

    //获取内容页数据
    getTopicByID(id, obj) {
        return HOST_URI + GET_TOPIC_BY_ID + id + '?' + obj2uri(obj);
    }
};