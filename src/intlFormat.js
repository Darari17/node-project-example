// bentuk import common js
const { intlFormat } = require("date-fns");

// bentuk import esmodule
// import { intlFormat } from "date-fns";
function useIntlFormat(date, locale) {
  if (locale) {
    const result = intlFormat(date, {
      locale,
    });
    return result;
  }
  const result = intlFormat(date);
  return result;
}

// format common js
module.exports = useIntlFormat;

// format esmodule
// export default useIntlFormat
