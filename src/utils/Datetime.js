import { format, parseISO } from 'date-fns'

const Datetime = {

	format: dateString => format(parseISO(dateString), 'MMMM d, yyyy'),
}

export {
	Datetime
}
