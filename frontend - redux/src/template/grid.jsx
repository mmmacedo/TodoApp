import React, { Component } from 'react';

export default class Grid extends Component {
    toCssClasses(numbers) { //4 parametros, CEl, Tablets, Médios e Telas maiores
        const cols = numbers ? numbers.split(' ') : [];

        let classes = '';

        if (cols[0]) {
            classes += `col-xs-${cols[0]}`; //cel
        }
        if (cols[1]) {
            classes += ` col-sm-${cols[1]}`; // small
        }
        if (cols[2]) {
            classes += ` col-md-${cols[2]}`; //medium
        }
        if (cols[3]) {
            classes += ` col-lg-${cols[3]}`; //large
        }

        return classes;
    }

    render () {
        const gridClasse = this.toCssClasses(this.props.cols || 12);
        return (
            <div className={gridClasse}>
                {this.props.children}
            </div>
        )
    }
}