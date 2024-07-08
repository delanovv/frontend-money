document.addEventListener('alpine:init', () => {
  Alpine.data('shapes', () => ({
    shapes: [],
    init() {
      for (let i = 0; i < 3; i++) {
        this.shapes.push(this.generateShape(i));
      }
    },
    generateShape(id) {
      const width = this.getRandomSize();
      const height = this.getRandomSize();
      const position = this.getRandomPosition(width, height);
      return {
        id: id,
        left: position.left,
        top: position.top,
        width: width,
        height: height,
      };
    },
    getRandomSize() {
      return Math.floor(Math.random() * 300) + 500;
    },
    getRandomPosition(width, height) {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const perimeter = 2 * (containerWidth + containerHeight);

      let position = (perimeter / 4) * this.shapes.length;

      let left, top;
      if (position < containerWidth) {
        left = position;
        top = 0;
      } else if (position < containerWidth + containerHeight) {
        left = containerWidth;
        top = position - containerWidth;
      } else if (position < 2 * containerWidth + containerHeight) {
        left = containerWidth - (position - containerWidth - containerHeight);
        top = containerHeight;
      } else {
        left = 0;
        top =
          containerHeight - (position - 2 * containerWidth - containerHeight);
      }

      left -= width / 2;
      top -= height / 2;
      return { left, top };
    },
  }));
});
