<template>
    <div>
        <div class="noteItem">
            <div class="idContent">
                <span> {{ noteItem.id }} </span>
            </div>
            <div class="noteContent">
                {{ noteItem.note }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        noteItem: {
            type: Object,
            required: true
        }
    }
}
</script>