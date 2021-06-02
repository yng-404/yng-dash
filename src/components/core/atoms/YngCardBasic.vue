<template>
    <div class="">
        <div class="px-4 py-3 border-b">
            <slot name="header">Title Here</slot>
        </div>
        <div class="px-4 py-3 text-sm tracking-wider">
            <slot>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam enim hic nesciunt officiis, labore ducimus illum maiores quos asperiores cum! Vel dolor eligendi iusto quasi repellat deleniti officiis consectetur cum.
                </p> 
            </slot>
        </div>
        <slot name="footer">
            <div class="px-4 py-3 border-t">
                Footer here
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    
}
</script>