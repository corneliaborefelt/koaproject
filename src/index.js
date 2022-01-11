$url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6afc448fe23c11d71c4ef58d3ee8cfd5&tags=babyyoda&format=rest';
$data = file_get_contents($url);
print_r($data);