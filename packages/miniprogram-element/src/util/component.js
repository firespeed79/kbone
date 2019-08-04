const view = require('../component/view')
const video = require('../component/video')
const image = require('../component/image')
const input = require('../component/input')
const textarea = require('../component/textarea')
const picker = require('../component/picker')
const button = require('../component/button')
const map = require('../component/map')
const coverView = require('../component/cover-view')
const coverImage = require('../component/cover-image')
const livePlayer = require('../component/live-player')
const livePusher = require('../component/live-pusher')
const webView = require('../component/web-view')

module.exports = {
    properties: {
        view: view.properties,
        input: input.properties,
        textarea: textarea.properties,
        video: video.properties,
        picker: picker.properties,
        image: image.properties,
        button: button.properties,
        map: map.properties,
        'cover-view': coverView.properties,
        'cover-image': coverImage.properties,
        'live-player': livePlayer.properties,
        'live-pusher': livePusher.properties,
        'web-view': webView.properties,
    },
    handles: {
        ...view.handles,
        ...input.handles,
        ...textarea.handles,
        ...video.handles,
        ...picker.handles,
        ...image.handles,
        ...button.handles,
        ...map.handles,
        ...coverView.handles,
        ...coverImage.handles,
        ...livePlayer.handles,
        ...livePusher.handles,
        ...webView.handles,
    },
}