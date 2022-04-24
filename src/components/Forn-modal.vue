<template>
   
    <div class="modal-form">
      <h2>Кечирасиз... Сиз олдин рўйхатдан отмагансиз</h2>
    </div>
  
</template>

<script>
export default {
   props:['showModal'],
};
</script>

<style lang='scss'>
.modal-form {
  position: fixed;
  z-index: 5;
  top: 30px;
  max-width: 250px;
  padding: 20px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
  background: #2c3e50;
  box-shadow: 2px 2px 7px #000;
}
</style>