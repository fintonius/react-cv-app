import TextInput from './TextInput'
import AddButton from './AddButton';

export default function SectionInput(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Test form</h1>
            <TextInput />
            <AddButton />
        </form>
    )
}