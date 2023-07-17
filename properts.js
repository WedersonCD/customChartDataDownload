
define([], function () {

    return {
        type: "items",
        component: "accordion",
        Configuration: {
            type: "items",
            label: "Configuration",
            items: {
                LabelDistance: {
                    ref: "settings.object.id",
                    label: "Object ID",
                    type: "string",
                    defaultValue: '',
                    expression: "optional"
                },
                Width: {
                    ref: "settings.width",
                    label: "Width",
                    type: "string",
                    defaultValue: '1920',
                    expression: "optional"
                },
                Height: {
                    ref: "settings.height",
                    label: "Height",
                    type: "string",
                    defaultValue: '1080',
                    expression: "optional"
                }
            }
        }
    }
})