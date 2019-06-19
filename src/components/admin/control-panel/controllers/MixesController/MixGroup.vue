<template>
    <div class="mix--group--outer">
          <div class="mix--group--header flexbox-space-between">
            
            <h3 class="mix-number">Mix {{ mix.id + 1 }}</h3>
            <div class="mix-manage--outer fbx flexgap-2">
              <button v-if="beingEdited" class="btn">Save Edits</button>
              <button class="btn">Delete Mix</button>
            </div>
          </div>
          
          <div class="mix--group--inner fbx flexgap-2">
            <div class="mix--group--info f1">
              <div class="form--group">
                <label :for="'title' + mix.id">Mix Title</label>
                <input type="text" class="admin--input mix--title" :id="'title' + mix.id" :placeholder="mix.title">
              </div>
              <div class="form--group">
                <label :for="'description' + mix.id">Mix Description</label>
                <input type="text" class="admin--input mix--description" :id="'title' + mix.id" :placeholder="mix.description">
              </div>
            </div>
            <div class="mix--group--embeds f1">
              <div class="form--group">
                <label :for="'mix--desktop' + mix.id">Desktop Embed Link</label>
                <input type="text" class="admin--input mix--embed--desktop" :id="'mix--desktop' + mix.id" :placeholder="mix.embeds.desktop">
              </div>
              <div class="form--group">
                <label :for="'mix--mobile' + mix.id">Mobile Embed Link</label>
                <input type="text" class="admin--input mix--embed--desktop" :id="'mix--mobile' + mix.id" :placeholder="mix.embeds.mobile">
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

