const C='sticker-gen-v23',F=['./','./index.html','./Proletar Tech · Invoice.html','./manifest.webmanifest','./proletar-logo.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>/^sticker-gen-v\d+$/.test(x)&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;
  e.respondWith(caches.open(C).then(async c=>{
    const cached=await c.match(r);
    if(cached)return cached;
    try{
      return await fetch(r);
    }catch(err){
      if(r.mode==='navigate'){
        const fallback=await c.match('./index.html');
        if(fallback)return fallback;
      }
      throw err;
    }
  }));
});
 