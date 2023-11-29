<!-- slot btn -->
<template>
        <button class="slotted-btn">
                <slot></slot>
        </button>
</template>

<!-- styling -->
<style>
/* button styling */
.slotted-btn {
        background-color: #717262;
        color: #fff;
        font-style: bold;
        font-size: 18px;
        width: 150px;
        height: 40px;
        padding: 7px;
        border: 1px solid #000;
        border-radius: 100px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
/* hovering effects */
.slotted-btn:hover {
        cursor: pointer;
        background-color:#555D57;
}

</style>