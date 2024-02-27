from rest_framework import routers
from .api import userViewset

router = routers.DefaultRouter()
router.register('api/user', userViewset ,'users')
urlpatterns = router.urls