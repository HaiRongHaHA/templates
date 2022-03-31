import { Overlay, Popup, ActionSheet, Toast, Dialog, Button } from 'vant'

export default (Vue: any) => {
  Vue.use(Overlay)
    .use(Popup)
    .use(ActionSheet)
    .use(Toast)
    .use(Dialog)
    .use(Button)
}
