export function validateRequired({ allowEmptyStrings } = {}) {
    return (control) => {
        return control.pristine || isValidRequired(control.value, allowEmptyStrings)
            ? null
            : { required: true };
    };
}
function isValidRequired(value, allowEmptyStrings) {
    if (value || value === 0 || value === false)
        return true;
    if (allowEmptyStrings && value === '')
        return true;
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxFQUFFLGlCQUFpQixLQUFzQixFQUFFO0lBQzFFLE9BQU8sQ0FBQyxPQUF3QixFQUF3QixFQUFFO1FBQ3hELE9BQU8sT0FBTyxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQztZQUMxRSxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsS0FBVSxFQUFFLGlCQUEwQjtJQUM3RCxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFekQsSUFBSSxpQkFBaUIsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRW5ELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVkRXJyb3Ige1xyXG4gIHJlcXVpcmVkOiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVkT3B0aW9ucyB7XHJcbiAgYWxsb3dFbXB0eVN0cmluZ3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSZXF1aXJlZCh7IGFsbG93RW1wdHlTdHJpbmdzIH06IFJlcXVpcmVkT3B0aW9ucyA9IHt9KTogVmFsaWRhdG9yRm4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUmVxdWlyZWRFcnJvciB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGNvbnRyb2wucHJpc3RpbmUgfHwgaXNWYWxpZFJlcXVpcmVkKGNvbnRyb2wudmFsdWUsIGFsbG93RW1wdHlTdHJpbmdzKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiB7IHJlcXVpcmVkOiB0cnVlIH07XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFJlcXVpcmVkKHZhbHVlOiBhbnksIGFsbG93RW1wdHlTdHJpbmdzOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSBmYWxzZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gIGlmIChhbGxvd0VtcHR5U3RyaW5ncyAmJiB2YWx1ZSA9PT0gJycpIHJldHVybiB0cnVlO1xyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIl19