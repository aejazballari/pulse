export default function Validate (data) {
    let errors = {}

    if(!data.request || data.request === 'Select') {
        errors.request = 'Please select type of Request.'
    }

    if(!data.lid || data.lid === 'Select') {
        errors.lid = 'This field is required.'
    }

    if(!data.seat || data.seat === 'Select') {
        errors.seat = 'This field is required.'
    }

    if(!data.desc) {
        errors.desc = 'This field is required.'
    }

    return errors
}