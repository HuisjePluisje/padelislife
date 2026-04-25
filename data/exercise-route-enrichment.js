(function applyExerciseRouteMetadata() {
  const metadata = window.EXERCISE_ROUTE_METADATA || {};
  const routes = Array.isArray(window.TRAINING_ROUTES) ? window.TRAINING_ROUTES : [];
  const routeMap = routes.reduce((map, route) => {
    map[route.slug] = route;
    return map;
  }, {});

  function enrich(list) {
    if (!Array.isArray(list)) {
      return;
    }

    list.forEach((exercise) => {
      const routeMeta = metadata[exercise.id];
      if (!routeMeta) {
        return;
      }

      const routeDetails = routeMap[routeMeta.primaryRoute] || null;
      // Keep route/audit data outside the blueprints so we can reorder the library without duplicating drill copy.
      const mergedMeta = {
        secondaryRoutes: [],
        problemTags: [],
        strokeTags: [],
        ...routeMeta,
        routeDetails
      };

      if (routeDetails) {
        mergedMeta.routeName = routeDetails.name;
        mergedMeta.habitFocus = mergedMeta.habitFocus || routeDetails.defaultHabit;
        mergedMeta.unlearnPattern = mergedMeta.unlearnPattern || routeDetails.defaultUnlearn;
        mergedMeta.nextProgressionWhen = mergedMeta.nextProgressionWhen || routeDetails.defaultNextGate;
        mergedMeta.scoreGuide = {
          ...(routeDetails.defaultScoreGuide || {}),
          ...(mergedMeta.scoreGuide || {})
        };

        if (mergedMeta.audit) {
          mergedMeta.audit = {
            ...mergedMeta.audit,
            route: mergedMeta.audit.route || routeDetails.name
          };
        }
      }

      Object.assign(exercise, mergedMeta);
    });
  }

  enrich(window.EXERCISE_BLUEPRINTS);
  enrich(window.EXTRA_EXERCISE_BLUEPRINTS);
})();
