import { parseHTML } from './parser-html'
import { generateHTML } from './generate-html'

export function compileToFunctions (template) {
  let root = parseHTML(template)

  let code = generateHTML(root)

  var renderFun = new Function(`with(this){ return ${code}}`)

  return renderFun
}
