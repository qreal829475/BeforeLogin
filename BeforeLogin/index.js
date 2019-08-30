// components/BeforeLogin/index.js
// import userUtil from '../../utils/user-util.js';
// 获取应用实例
// const app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isShow: {
            type: Boolean,
            data: false,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        refuse: function() {
            this.triggerEvent('customevent', {
                type: 'refuse'
            })
        },

        // consent: function() {
        //     this.triggerEvent('customevent', {
        //         result: true,
        //     })
        // },

        // 获取手机号授权
        getPhoneNumber(e) {
            // userUtil.handlePhoneNumber(e, app, this.channelId).then(result => {
            // console.log(result);
            if (e) {
                this.triggerEvent('customevent', {
                    type: 'consent',
                    result: e,
                })
            }
            // });
        },
    }
})