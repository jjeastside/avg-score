const {read_fumens, write_scores} = require('./IO_fumens')
const {call_sfinder_path} = require('./call_sfinder_path')
const {calculate_all_scores, generate_all_permutations, loadPathCSV} = require('./avg_score');

async function main() {

    let piece = '';

    let file = 'kiwi'

    let fumens = await read_fumens(file);

    // console.log(fumens);

    for (let i = 0; i < fumens.length; i++) {
        let fumen = fumens[i];

        await call_sfinder_path(fumen);

        let results;

        let queues = generate_all_permutations('LJSZIOT').map(q => q.join(''));

        results = calculate_all_scores(
            queues,
            // loadCSV('output/cover.csv'), // loadCSV('output/cover.csv')
            loadPathCSV('output/path.csv'),
            false, // initial b2b
            0, // initial combo
            0, // b2b end bonus
            'output/score_cover.csv', // score cover file
        );

        await write_scores(file, results.average_covered_score);
        console.log(results.average_covered_score);
    }

}

main()