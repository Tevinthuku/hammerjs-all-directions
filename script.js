// create a simple intance

var mc = new Hammer(myelement);

// to disable scroll when on that elemrmt
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL});


mc.on('panleft panright panup pandown tap press', function(ev) {
  myelement.textContent = ev.type + "gesture detected"
});
