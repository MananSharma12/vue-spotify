import {configure, defineRule} from 'vee-validate';
import {confirmed, email, max_value, min_value, required} from "@vee-validate/rules";

type ValidationMessages = {
    required: string;
    email: string;
    confirmed: string;
    min_value: string;
    max_value: string;
    [key: string]: string
}

export default defineNuxtPlugin(() => {
    defineRule('required', required);
    defineRule('email', email);
    defineRule('confirmed', confirmed);
    defineRule('min_value', min_value);
    defineRule('max_value', max_value);

    configure({
        generateMessage(ctx) {
            const messages: ValidationMessages = {
                required: `The field ${ctx.field} is required.`,
                email: `The field ${ctx.field} must be a valid email.`,
                confirmed: `The field ${ctx.field} does not match.`,
                min_value: `The field ${ctx.field} is too low`,
                max_value: `The field ${ctx.field} is too high`,
            }

            const ruleName = ctx.rule?.name;
            return ruleName && messages[ruleName] ? messages[ruleName] : `The field ${ctx.field} is invalid.`;
        },
    });
})
