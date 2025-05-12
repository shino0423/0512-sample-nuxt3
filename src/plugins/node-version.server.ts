typescript
export default defineNuxtPlugin(() => {
  const nodeVersion = process.version; // 例: "v18.20.4"
  return {
    provide: {
      nodeVersion: nodeVersion
    }
  };
});
