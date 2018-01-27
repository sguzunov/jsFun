function solveHanoiTowers(numberOfDisks, fromRod, toRod, auxRod, onMoveCb) {
    if (numberOfDisks <= 1) {
        return onMoveCb(numberOfDisks, fromRod, toRod);
    }

    solveHanoiTowers(numberOfDisks - 1, fromRod, auxRod, toRod, onMoveCb);
    onMoveCb(numberOfDisks, fromRod, toRod);
    solveHanoiTowers(numberOfDisks - 1, auxRod, toRod, fromRod, onMoveCb);
}

module.exports = {
    solveHanoiTowers: function(numberOfDisks, fromRod, toRod, auxRod, onMoveCb) {
        if (!onMoveCb || typeof(onMoveCb) === 'function') {
            onMoveCb = (disk, from, to) => console.log(`Disk ${disk} from ${from} to ${to}.`);
        }

        return solveHanoiTowers(numberOfDisks, fromRod, toRod, auxRod, onMoveCb);
    }
};