export const TaskFilter = ({ filterTask, handleSetFilter}) => {

    return (
        <div className="container d-flex flex-column align-items-center mt-2">
            <h6>Filtrar Tareas</h6>
            <input className="m-2 form-control"
                style={{ maxWidth: 300 }}
                type="text"
                placeholder="Filtrar tareas..."
                value={filterTask}
                onChange={handleSetFilter}
            />
        </div>
    );
};

export default TaskFilter;