<template>
  <div class="mix--group--outer"> 
    <h3 class="mix-number">Add New Mix</h3>
    
    <div
      :class="viewport.width < 480 ? 'fd-c' : 'flexgap-2'" 
      class="mix--group--inner fbx"
    >
      <form class="mix--group--info f1">

        <div class="form--group">
          <label :for="'new-title'">Mix Title</label>
          <input 
            type="text" class="admin--input"
            id="new-title"
            placeholder="Enter the title of your mix here"
            required
            v-model="mixData.title"
          >
        </div>

        <div class="form--group">
          <label :for="'new-title'">Desktop Embed</label>
          <input 
            type="text" class="admin--input"
            id="new-title"
            placeholder="Enter the desktop embed link here"
            required
            v-model="mixData.embeds.desktop"
          >
        </div>

        <div class="form--group">
          <label :for="'new-title'">Mobile Embed</label>
          <input 
            type="text" class="admin--input"
            id="new-title"
            placeholder="Enter the mobile embed link here"
            required
            v-model="mixData.embeds.mobile"
          >
        </div>



      </form>

      <div class="mix--group--description f1 fbx fd-c flexbox-space-between">

          <div class="form--group">
            <label :for="'new-description'">Mix Description</label>
            <textarea
              id="new-description"
              placeholder="Enter the description of your mix here"
              class="admin--input"
              style="height: 5rem;"
              required
              v-model="mixData.description"
            />
          </div>

          <div class="add-mix--manager fbx flex-justify-end">
            <button 
              @click="addNewMix"
              class="btn add-btn">
              Add To Mixes
            </button>
            <button 
              @click="cancelAdd"
              class="btn"
              >Cancel
            </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mixData: {
        title: '',
        embeds: {
          desktop: '',
          mobile: '',
        },
        description: '',
      },
    }
  },
  methods: {
    addNewMix() {
      const { title, embeds, description } = this.mixData;
      if (!title) {
        console.log('mix title is required..')
        return;
      }
      if (!embeds.desktop || !embeds.mobile) {
        console.log('both mix embeds are required..')
        return;
      }
      if (!description) {
        console.log('mix description is required..')
        return;
      }
      this.$store.dispatch('addNewMix_ACTION', this.mixData);
    },
    cancelAdd() {
      this.mixData = {
        title: '',
        embeds: {
          desktop: '',
          mobile: '',
        },
        description: '',
      };
      this.$emit('cancelAdd');
    }
  }
}
</script>

<style scoped>
.mix--group--outer {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #1b35c5;
  border-radius: 3px;
}
.add-btn {
  margin-right: 1rem;
}
</style>

