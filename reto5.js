function createXmasTree1(height, ornament) {
    const long = (2 * height) - 1; 
    let result = []; 

    const tronco = (long) => {
        const space = '_'.repeat((long - 1) / 2);
        return [
            space + '#' + space, 
            space + '#' + space
        ]; 
    };

    const treeLine = (long, i, ornament) => {
        const space = '_'.repeat((long - i) / 2);
        const ornaments = ornament.repeat(i);
        return space + ornaments + space; 
    };

    for (let i = 1; i <= height; i++) {
        result.push(treeLine(long, (i * 2) - 1, ornament)); 
    }
    result.push(...tronco(long));

    return result.join('\n');
}

function createXmasTree(height, ornament) {
    const baseWidth = (2 * height) - 1; 
    let treeLines = [];
    const createLine = (contentWidth, content) => {
        const padding = '_'.repeat((baseWidth - contentWidth) / 2);
        return padding + content + padding;
    };
    for (let i = 1; i <= height; i++) {
        const ornamentsWidth = (i * 2) - 1; 
        treeLines.push(createLine(ornamentsWidth, ornament.repeat(ornamentsWidth)));
    }

    const trunkLine = createLine(1, '#');
    treeLines.push(trunkLine, trunkLine); 

    return treeLines.join('\n');
}

const tree = createXmasTree(10, '*');
console.log(tree);
