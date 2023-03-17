export const setting = {
  continuousDialogue: false,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 网站使用\`密码\`请至公众号[马克云](https://mp.weixin.qq.com/s/t8Hmk7JOvel7_pi5I5Vhpg)获取，打开⚙️填写。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [@ourongxing](https://github.com/ourongxing) 提供技术支持
export type Setting = typeof setting

export const resetContinuousDialogue = false
