<script setup lang="ts">
const isDragover = ref(false);

function upload($event: DragEvent) {
  isDragover.value = false;

  const files: FileList | undefined = $event.dataTransfer?.files;
  if (!files) return;

  for (const file of files) {
    if (file.type !== 'audio/mpeg') {
      return;
    }
  }
}
</script>

<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <Icon name="ic:baseline-file-upload" class="float-right text-green-400 text-xl"/>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
          class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
          :class="{ 'bg-green-400 border-green-400 border-solid': isDragover }"
          @drag.prevent.stop=""
          @dragstart.prevent.stop=""
          @dragend.prevent.stop="isDragover = false"
          @dragover.prevent.stop="isDragover = true"
          @dragenter.prevent.stop="isDragover = true"
          @dragleave.prevent.stop="isDragover = false"
          @drop.prevent.stop="upload($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <hr class="my-6"/>
      <!-- Progess Bars -->
      <div class="mb-4">
        <!-- File Name -->
        <div class="font-bold text-sm">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
              class="transition-all progress-bar bg-blue-400"
              style="width: 75%"
          ></div>
        </div>
      </div>
      <div class="mb-4">
        <div class="font-bold text-sm">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <div
              class="transition-all progress-bar bg-blue-400"
              style="width: 35%"
          ></div>
        </div>
      </div>
      <div class="mb-4">
        <div class="font-bold text-sm">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <div
              class="transition-all progress-bar bg-blue-400"
              style="width: 55%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
