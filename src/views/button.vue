<template>
  <div class="meta-Button">
    <span>普通按钮</span>
    <div class="main">
    <meta-button type="normal">normal</meta-button>
    <meta-button type="primary">primary</meta-button>
    <meta-button type="success">success</meta-button>
    <meta-button type="danger">danger</meta-button>
    <meta-button type="warning">warning</meta-button>
    <meta-button type="info">info</meta-button>
    </div>
    <span>大小按钮</span>
    <div class="main">
    <meta-button size="large" type="normal">large</meta-button>
    <meta-button size="medium" type="normal">medium</meta-button>
    <meta-button size="small" type="normal">small</meta-button>
    </div>
    <span>圆角按钮</span>
    <div class="main">
    <meta-button type="normal" round>round</meta-button>
    <meta-button type="primary" round>round</meta-button>
    <meta-button type="success" round>round</meta-button>
    <meta-button type="danger" round>danger</meta-button>
    <meta-button type="warning" round>warning</meta-button>
    <meta-button type="info" round>info</meta-button>
    </div>
    <span>禁用按钮</span>
    <div class="main">
    <meta-button type="normal" disabled>normal</meta-button>
    <meta-button type="primary" disabled>primary</meta-button>
    <meta-button type="success" disabled>success</meta-button>
    <meta-button type="danger" disabled>danger</meta-button>
    <meta-button type="warning" disabled>warning</meta-button>
    <meta-button type="info" disabled>info</meta-button>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
.meta-Button{
  display:flex;
  flex-direction:column;
  margin-left:50px;
}

.meta-Button.main{
  float: left;
}

</style>