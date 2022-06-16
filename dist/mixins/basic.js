import { nextTick } from '../common/utils';
export const basic = Behavior({
    methods: {
        $emit(name, detail, options) {
            this.triggerEvent(name, detail, options);
        },
        set(data) {
            this.setData(data);
            return new Promise((resolve) => nextTick(resolve));
        },
    },
});
