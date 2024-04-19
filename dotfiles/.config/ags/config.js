const entry = App.configDir + '/src/index.ts'
const outdir = '/tmp/ags/js'

try {
    await Utils.execAsync([
        '/home/lennox/.bun/bin/bun', 'build', entry,
        '--outdir', outdir,
        '--external', 'resource://*',
        '--external', 'gi://*',
    ])
    await import(`file://${outdir}/index.js`)
} catch (error) {
    console.error(error)
}