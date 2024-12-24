const ConfigDevicesLocal = [
  {
    tagname: 'Pompa-1',
    type: 'Pompa',
    description: 'Pompa sirkulasi hidroponik',
    unit: 'Detik',
    highRange: 100,
    lowRange: 0,
    highAlarm: 80,
    lowAlarm: 30,
  },
  {
    tagname: 'Sensor-1',
    type: 'Sensor',
    description: 'Konsentrasi nutrisi',
    unit: 'ppm',
    highRange: 750,
    lowRange: 0,
    highAlarm: 650,
    lowAlarm: 300,
  },
];
export default ConfigDevicesLocal;
