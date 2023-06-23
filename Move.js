// Registering component in box-component.js
AFRAME.registerComponent("move-rocket", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
      var pos = this.el.getAttribute("position");
      this.data.moveY = this.data.moveY + 0.01;
      pos.y = this.data.moveY;
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
    
  });
  
  AFRAME.registerComponent("zoom", {
    schema: {
      moveZ: { type: "number", default: 10 },
    },
  
    tick: function () {
      this.data.moveZ = this.data.moveZ + 0.01;
    
      var pos = this.el.getAttribute("position");
  
      pos.z = this.data.moveZ;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    },

    

    
  });

  AFRAME.registerComponent("fallout", {
    schema: {
      moveY: { type: "number", default: 0 },
    },
  
    tick: function () {
      window.addEventListener("click", (e) => { this.data.moveY = this.data.moveY - 0.0001; });
      var pos = this.el.getAttribute("position");
      pos.y = pos.y + this.data.moveY;
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    },
  });