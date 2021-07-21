function sort(m){
  step = 1 
  tmp = []
  mas = []
  for (i=0; i<m.length; i++){
    if (mas.length != 0){
      if (mas[mas.length-1] == m[i]-1) {
        mas.push(m[i])
      }
      else {
        tmp.push(mas)
        mas = []
        mas.push(m[i])
      }
    }
    else {
      mas.push(m[i])
    }
    if (m[i] == (m[m.length-1])){
      tmp.push(mas)
    }
  }
  return tmp
}

exports.getText = (input) => {
  return new Promise((resolve, reject) => {
    lineList = []
      line = '"'
      tmp = sort(input)
      for (i=0; i<tmp.length; i++) {
        if (tmp[i].length == 2) {
          line += tmp[i][0] + ',' + tmp[i][1] + ','
        }
        if (tmp[i].length == 1) {
          line += tmp[i] + ','
        }
        if (tmp[i].length > 2)
        line += tmp[i][0] + '-' + tmp[i][tmp[i].length-1] + ','
      }
      line = line.slice(0, -1) + '"'
    resolve(line)
  });
}

