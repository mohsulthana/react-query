import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
    previousTodo: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,
        onMutate: (newTodo) => {
            const previousTodos =
                queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) ?? [];

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos,
            ]);

            onAdd();

            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );
        },
        onError: (error, newTodo, context: AddTodoContext) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(
                CACHE_KEY_TODOS,
                context.previousTodo
            );
        },
    });
};

export default useAddTodo;
