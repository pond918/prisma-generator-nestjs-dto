import type { TemplateHelpers } from './template-helpers';
import type { EntityParams } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../../package.json');

interface GenerateEntityParam extends EntityParams {
  templateHelpers: TemplateHelpers;
}
export const generateEntity = ({
  model,
  fields,
  imports,
  apiExtraModels,
  templateHelpers: t,
}: GenerateEntityParam) => `
// @@generated by ${name}@${version}. ${new Date().toLocaleDateString('sv-SE')}
// modification to this file may be overwritten when regenerating.
${t.importStatements(imports)}

${t.if(apiExtraModels.length, t.apiExtraModels(apiExtraModels))}
export ${t.config.outputType} ${t.entityName(model.name)} {
  ${t.fieldsToEntityProps(fields)}
}
`;
