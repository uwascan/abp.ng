export function mergeWithDefaultActions(extension, defaultActions, ...contributors) {
    Object.keys(defaultActions).forEach((name) => {
        const actions = extension.get(name);
        actions.clearContributors();
        actions.addContributor((actionList) => actionList.addManyTail(defaultActions[name]));
        contributors.forEach(contributor => (contributor[name] || []).forEach((callback) => actions.addContributor(callback)));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi91dGlscy9hY3Rpb25zLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0EsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxTQUFZLEVBQ1osY0FBeUMsRUFDekMsR0FBRyxZQUFxRDtJQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQ25ELE1BQU0sT0FBTyxHQUF1QixTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFzQixFQUFFLEVBQUUsQ0FDaEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDN0MsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDakMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBd0MsRUFBRSxFQUFFLENBQzdFLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQ2pDLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkNvbnRyaWJ1dG9yQ2FsbGJhY2ssIEFjdGlvbkxpc3QsIEFjdGlvbnNGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL2FjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEVudGl0eUFjdGlvbkNvbnRyaWJ1dG9yQ2FsbGJhY2tzLFxyXG4gIEVudGl0eUFjdGlvbkRlZmF1bHRzLFxyXG4gIEVudGl0eUFjdGlvbnMsXHJcbiAgRW50aXR5QWN0aW9uc0ZhY3RvcnksXHJcbn0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS1hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBUb29sYmFyQWN0aW9uQ29udHJpYnV0b3JDYWxsYmFja3MsXHJcbiAgVG9vbGJhckFjdGlvbkRlZmF1bHRzLFxyXG4gIFRvb2xiYXJBY3Rpb25zLFxyXG4gIFRvb2xiYXJBY3Rpb25zRmFjdG9yeSxcclxufSBmcm9tICcuLi9tb2RlbHMvdG9vbGJhci1hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVdpdGhEZWZhdWx0QWN0aW9uczxGIGV4dGVuZHMgQWN0aW9uc0ZhY3Rvcnk8YW55Pj4oXHJcbiAgZXh0ZW5zaW9uOiBGLFxyXG4gIGRlZmF1bHRBY3Rpb25zOiBJbmZlcnJlZEFjdGlvbkRlZmF1bHRzPEY+LFxyXG4gIC4uLmNvbnRyaWJ1dG9yczogSW5mZXJyZWRBY3Rpb25Db250cmlidXRvckNhbGxiYWNrczxGPltdXHJcbikge1xyXG4gIE9iamVjdC5rZXlzKGRlZmF1bHRBY3Rpb25zKS5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGFjdGlvbnM6IEluZmVycmVkQWN0aW9uczxGPiA9IGV4dGVuc2lvbi5nZXQobmFtZSk7XHJcbiAgICBhY3Rpb25zLmNsZWFyQ29udHJpYnV0b3JzKCk7XHJcbiAgICBhY3Rpb25zLmFkZENvbnRyaWJ1dG9yKChhY3Rpb25MaXN0OiBBY3Rpb25MaXN0KSA9PlxyXG4gICAgICBhY3Rpb25MaXN0LmFkZE1hbnlUYWlsKGRlZmF1bHRBY3Rpb25zW25hbWVdKSxcclxuICAgICk7XHJcbiAgICBjb250cmlidXRvcnMuZm9yRWFjaChjb250cmlidXRvciA9PlxyXG4gICAgICAoY29udHJpYnV0b3JbbmFtZV0gfHwgW10pLmZvckVhY2goKGNhbGxiYWNrOiBBY3Rpb25Db250cmlidXRvckNhbGxiYWNrPGFueT4pID0+XHJcbiAgICAgICAgYWN0aW9ucy5hZGRDb250cmlidXRvcihjYWxsYmFjayksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcbnR5cGUgSW5mZXJyZWRBY3Rpb25EZWZhdWx0czxGPiA9IEYgZXh0ZW5kcyBFbnRpdHlBY3Rpb25zRmFjdG9yeTxpbmZlciBSRT5cclxuICA/IEVudGl0eUFjdGlvbkRlZmF1bHRzPFJFPlxyXG4gIDogRiBleHRlbmRzIFRvb2xiYXJBY3Rpb25zRmFjdG9yeTxpbmZlciBSVD5cclxuICA/IFRvb2xiYXJBY3Rpb25EZWZhdWx0czxSVD5cclxuICA6IG5ldmVyO1xyXG5cclxudHlwZSBJbmZlcnJlZEFjdGlvbkNvbnRyaWJ1dG9yQ2FsbGJhY2tzPEY+ID0gRiBleHRlbmRzIEVudGl0eUFjdGlvbnNGYWN0b3J5PGluZmVyIFJFPlxyXG4gID8gRW50aXR5QWN0aW9uQ29udHJpYnV0b3JDYWxsYmFja3M8UkU+XHJcbiAgOiBGIGV4dGVuZHMgVG9vbGJhckFjdGlvbnNGYWN0b3J5PGluZmVyIFJUPlxyXG4gID8gVG9vbGJhckFjdGlvbkNvbnRyaWJ1dG9yQ2FsbGJhY2tzPFJUPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIEluZmVycmVkQWN0aW9uczxGPiA9IEYgZXh0ZW5kcyBFbnRpdHlBY3Rpb25zRmFjdG9yeTxpbmZlciBSRT5cclxuICA/IEVudGl0eUFjdGlvbnM8UkU+XHJcbiAgOiBGIGV4dGVuZHMgVG9vbGJhckFjdGlvbnNGYWN0b3J5PGluZmVyIFJUPlxyXG4gID8gVG9vbGJhckFjdGlvbnM8UlQ+XHJcbiAgOiBuZXZlcjtcclxuIl19