export const link = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo',
        },
    },
    methods: {
        jumpLink(urlKey = 'url') {
            const url = this.data[urlKey];
            if (url) {
                if (this.data.linkType === 'navigateTo' &&
                    getCurrentPages().length > 9) {
                    tt.redirectTo({ url });
                }
                else {
                    tt[this.data.linkType]({ url });
                }
            }
        },
    },
});
