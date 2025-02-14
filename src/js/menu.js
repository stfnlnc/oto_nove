import {gsap} from "gsap";

export default function menu(columns, items) {

    let toggle = []
    for (let i = 0; i < 17; i++) {
        toggle[i] = false
    }

    const resetCol = (items, key, column, k, col) => {
        gsap.to(items[k], {
            x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
            duration: 0.5,
        })
        gsap.to(col, {
            x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
            duration: 0.5,
        })
    }

    columns.forEach((column, key) => {
        if (key === 0) {
            column.addEventListener('click', () => {
                for (let i = 0; i < 17; i++) {
                    toggle[i] = false
                }
                columns.forEach((col, k) => {
                    resetCol(items, key, column, k, col)
                })
            })
        }
        if (key > 12) {
            column.addEventListener('click', () => {
                toggle[key] = !toggle[key]
                for (let i = 13; i < key; i++) {
                    toggle[i] = true
                }
                for (let i = key + 1; i <= columns.length - 1; i++) {
                    if (toggle[i]) {
                        toggle[key] = true
                        toggle[i] = false
                        gsap.to(columns[i], {
                            x: '0',
                            duration: 0.5,
                        })
                        gsap.to(items[i], {
                            x: '0',
                            duration: 0.5,
                        })
                    }
                }
                gsap.to(column, {
                    x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                    duration: 0.5,
                })
                gsap.to(items[key], {
                    x: toggle[key] ? '-' + (column.offsetLeft - (column.offsetWidth * (key - 12))) + 'px' : '0',
                    duration: 0.5,
                })
                columns.forEach((col, k) => {
                    if (k < key && k > 0) {
                        resetCol(items, key, column, k, col)
                    }
                })
                console.log(toggle)
            })
        }
    })

}