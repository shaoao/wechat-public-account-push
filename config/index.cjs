/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */


const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx86ce7b210775deb9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8357f6b209dd0039d9b9c1a84ba9f360',

  PROVINCE: '河南',
  CITY: '洛阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '蕊蕊',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohUw26d8__3xKKQVID0QMUQ_wOI4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'g-ORIJFkpfZ2SkuDtgdaU00Zyc--V2HAvmj2gjqoawo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '蕊蕊', year: '2003', date: '09-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '奥奥', year: '2002', date: '11-28',
        },
        {
          type: '节日', name: '相爱纪念日', year: '2023', date: '02-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-16' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  TIAN_API: {
  // 天行API KEY，如果使用天行API则需要填写此项
  key: 'a0b8e76e7b3259224cc0070ee991973c',
  /** 天行API相关，需要config中配置 TIAN_API_KEY  */
  weather: 1,

},


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'o_BS49V60yzobTUo3dGL4QRJGhrTQ_2qCLdnv8Q-AUc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohUw26d8__3xKKQVID0QMUQ_wOI4',
    }
  ],

}

module.exports = USER_CONFIG

