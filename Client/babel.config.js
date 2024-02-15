module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};


// parcel already uses babel behind the Scene
// parcel has its own configuration for babel
// parcel will be confused
// there will be conflic bw parcel and this babel
// we will have to change parce behaviour