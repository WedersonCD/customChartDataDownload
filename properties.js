
define([], function () {

    return {
        type: "items",
        component: "accordion",
        items: {
            Configuration: {
                type: "items",
                label: "Configuration",
                items: {
                    ObjectId: {
                        ref: "settings.object.id",
                        label: "Object ID",
                        type: "string",
                        defaultValue: 'UDHBZS',
                        expression: "optional"
                    },

                    ButtomClass: {
                        ref: "settings.html.buttomClass",
                        label: "button class",
                        type: "string",
                        defaultValue: 'lui-icon lui-icon--download',
                        expression: "optional"
                    },
                    ButtomLabel: {
                        ref: "settings.html.buttomLabel",
                        label: "Buttom Label",
                        type: "string",
                        defaultValue: 'Download',
                        expression: "optional"
                    },
                    Type: {
                        ref: "settings.type",
                        label: "Data Label Position",
                        type: "string",
                        component: "dropdown",
                        defaultValue: 'image',
                        options: [
                            { value: "image", label: "PNG" },
                            { value: "XLSX", label: "XLSX" },
                            { value: "PDF", label: "PDF" }
                        ]
                    },
                    Width: {
                        ref: "settings.image.width",
                        label: "Width",
                        type: "string",
                        defaultValue: '1920',
                        expression: "optional"
                    },
                    Height: {
                        ref: "settings.image.height",
                        label: "Height",
                        type: "string",
                        defaultValue: '1080',
                        expression: "optional"
                    },
                }
            },
            appearance: {
                uses: "settings",
            }
        }

    }
})