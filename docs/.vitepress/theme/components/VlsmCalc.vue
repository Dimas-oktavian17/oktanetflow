<script setup>
import { ref, computed } from "vue";

const ip = ref("192.168.1.0");
const prefix = ref(24);

const calculateSubnet = computed(() => {
  const hosts = Math.pow(2, 32 - prefix.value) - 2;
  const mask = (0xffffffff << (32 - prefix.value)) >>> 0;

  return {
    usableHosts: hosts < 0 ? 0 : hosts.toLocaleString(),
    subnetMask: [
      (mask >>> 24) & 0xff,
      (mask >>> 16) & 0xff,
      (mask >>> 8) & 0xff,
      mask & 0xff,
    ].join("."),
  };
});
</script>

<template>
  <div class="vlsm-container">
    <div class="input-group">
      <label>Network IP</label>
      <input v-model="ip" type="text" placeholder="e.g. 10.0.0.0" />
    </div>

    <div class="input-group">
      <label>Prefix (CIDR) /{{ prefix }}</label>
      <input v-model.number="prefix" type="range" min="1" max="32" />
    </div>

    <div class="result-grid">
      <div class="result-item">
        <span>Subnet Mask</span>
        <strong>{{ calculateSubnet.subnetMask }}</strong>
      </div>
      <div class="result-item">
        <span>Usable Hosts</span>
        <strong>{{ calculateSubnet.usableHosts }}</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vlsm-container {
  margin: 20px 0;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-brand);
}

.input-group {
  margin-bottom: 15px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.result-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
}

.result-item {
  background: var(--vp-c-bg);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.result-item span {
  font-size: 12px;
  color: var(--vp-c-text-2);
  display: block;
}
</style>
