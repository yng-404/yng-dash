<script>

import { h } from 'vue'

export default {
    props: {
        wrapper: {
            default: 'button'
        }
    },
    setup(props) {
        let defaultClass
        if(props.wrapper === 'button') {
            defaultClass = 'focus:outline-none px-4 py-1 border rounded-md'
        }
        return() => h(props.wrapper, {
            class: defaultClass
        }, 'Menu')
    }
}
</script>